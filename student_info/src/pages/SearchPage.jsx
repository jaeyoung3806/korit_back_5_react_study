import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchPage(props) {
    const [ params ] = useSearchParams();
    const bookName = params.get("bookName");
    const categotyName = params.get("categoryName");

    const categories = useMemo(() =>[
        {
            categoryId: 1,
            categoryName: "역사"
        },
        {
            categoryId: 2,
            categoryName: "문학"
        },
        {
            categoryId: 3,
            categoryName: "컴퓨터"
        },
    
    ], []);

    const books = useMemo(() => [
        {
            BookId : 1,
            bookName: "java 역사",
            categoryId: 1
        },
        {
            BookId : 2,
            bookName: "컴퓨터 역사",
            categoryId: 1
        },
        {
            BookId : 3,
            bookName: "소설 역사",
            categoryId: 1
        },
        {
            BookId : 4,
            bookName: "문학이란",
            categoryId: 2
        },
        {
            BookId : 5,
            bookName: "역사를 말하다",
            categoryId: 2
        },
        {
            BookId : 6,
            bookName: "컴퓨터 기술",
            categoryId: 3
        },
        {
            BookId : 7,
            bookName: "java 기초 프로그래밍",
            categoryId: 3
        },
    ].filter(book => book.bookName.includes(bookName)  
        || book.categoryId === categories.filter(category => category.categoryName === categotyName)[0]?.categoryId), 
    [bookName, categotyName]);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>책번호</th>
                        <th>제목</th>
                        <th>카테고리번호</th>
                        <th>카테고리명</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr>
                            <td>{book.bookId}</td>
                            <td>{book.bookName}</td>
                            <td>{book.categoryId}</td>
                            <td>{categories.filter(category => category.categoryId === book.categoryId)[0].categoryName }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPage;