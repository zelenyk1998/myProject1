import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                palceholder ="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorted by"
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By discription'},
                ]}
            />
        </div>
    );
};

export default PostFilter;