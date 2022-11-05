import React from "react";
import style from "../Users.module.css"
import paginatorStyle from "./Paginator.module.css"

let Paginator = (props) => {

  let currentPage = props.currentPage;
  let maxPage = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];

  let begin = currentPage - 2;
  let end = currentPage + 2;

  if (currentPage <= 3) {
    begin = 1;
    end = 5;
  }
  if (currentPage >= maxPage - 2) {
    begin = maxPage - 4;
    end = maxPage;
  }

  for (let i = begin; i <= end; i++) {
    pages[i] = i;
  }

  // if(!props.isAuth) return <Redirect to='/login'/>

  return (<>

    <div className={style.users + " " + paginatorStyle.pagesBlock} >
      <span 
        className={paginatorStyle.pageButton} 
        onClick={() => props.clickHandler(1)}
      ><i class="fa-solid fa-angles-left"></i></span>
      <span 
        className={paginatorStyle.pageButton} 
        onClick={() => props.clickHandler(currentPage - 1 >= 1 ? currentPage - 1 : currentPage)}
        ><i class="fa-solid fa-chevron-left"></i></span>
      {pages.map((page) =>
        <span>
          <div
            className={(page === props.currentPage && style.currentPage) + " " + paginatorStyle.pageButton}
            onClick={() => props.clickHandler(page)}>
            {page}
          </div>
        </span>)
      }
      <span
        className={paginatorStyle.pageButton}
        onClick={() =>
          props.clickHandler(currentPage + 1 <= maxPage ? currentPage + 1 : currentPage)
        }
      ><i class="fa-solid fa-chevron-right"></i></span>
      <span
        className={paginatorStyle.pageButton}
        onClick={() => props.clickHandler(maxPage)}
      ><i class="fa-solid fa-angles-right"></i></span>
    </div></>
  )
}

// !rename clickHandler to smth readable

export default Paginator;