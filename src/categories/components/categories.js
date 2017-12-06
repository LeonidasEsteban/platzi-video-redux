import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media.js';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.search.map((item) => {
          return <Media {...item} key={item.id}/>
        })
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
