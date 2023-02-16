import React, {useEffect, useRef, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/page";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";
import MyButton_create from "../components/UI/button/MyButton_create";

function Posts() {
    const [posts, setPosts] =  useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement  = useRef();



    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page)  =>{
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })
    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(()=>{
        fetchPosts(limit, page)
    }, [page, limit])
    const createPost  = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)

    }
    const  changePage = (page) =>{
        setPage(page)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p  => p.id !== post.id))
    }

    let p;
    return (
        <div className="App">
            <MyButton_create style={{marginTop: 30}} onClick={() => setModal(true)}>
                Create Post
            </MyButton_create>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create ={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0px'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={limit}
                onChange={value=> setLimit(value)}
                defaultValue="Number of elements in page"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 15, name: '15'},
                    {value: -1, name: 'Visible All'},
                    ]}
            />
            {postError &&
                    <h1>Failed ${postError}</h1>
            }
            <PostList remove ={removePost} posts={sortedAndSearchedPosts} title="Post this JS"/>
            <div ref={lastElement}  style={{height: 20, background: 'red'}}/>
            {isPostsLoading &&
                  <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <Pagination
                page ={page}
                changePage={changePage}
                totalPages={totalPages}
            />


        </div>
    );
}

export default Posts;
