/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Line } from 'rc-progress';
import { storage } from "../../configs/firebase/firebaseConfig";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid"


const layout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;



function ImageEx() {
    const [ urls, setUrls] = useState("");
    const [ downloadURL, setDownloadURL ] = useState([]);
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ previews, setPreviews ] = useState([]);
    const [ progressPercent, setPregressPercent ] = useState([]);
    const imgFileRef = useRef();

    useEffect(() => {
        setUrls(!localStorage.getItem("urls") ? "" : JSON.parse(localStorage.getItem("urls")));
    }, []);
    
    const handleImgFileChange = (e) => {
        const files = Array.from(e.target.files);
        
        if(files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }
        
        setUploadFiles(files);

        let promises =  [];

        promises = files.map(file => new Promise((resolve) => {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                console.log(e.target.result);
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file);
        }));
        
        Promise.all(promises)
        .then(urls => {
            localStorage.setItem(JSON.stringify(urls));
            setUrls(urls);
            setPreviews([]);   
        });
    }
        const handleImageUpload = () => {
            const file = uploadFiles[0];
            const storageRef = ref(storage, `files/test/${uuid()}_${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setPregressPercent(Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                },
                (error) => {},
                () => {
                    getDownloadURL(storageRef).then(urls => {
                        localStorage.setItem("urls", urls);
                        setUrls(urls);
                        setPreviews([]);
                    })
                }
            );
        }

    
    
    return (
        <div css={layout}>
            {urls.map(url => 
                <div css={imageLayout}>
                    <img src={url} alt="" />
                </div>
            )}
            {previews.map((preview, index) =>
                <>
                    <div key={index} css={imageLayout}>
                        <img src={preview} alt="" />
                    </div>
                    <Line percent ={progressPercent} strokeWidth={4} strokeColor={"#22222"}/>
                    
                </>
        )}
            <input style={{display: "none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange} multiple={true} />
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}


export default ImageEx;



