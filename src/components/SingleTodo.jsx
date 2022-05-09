import { useParams } from "react-router-dom"

export const SingleTodo = () => {
    const {id}= useParams()
    return <div>
        <h1>{ id}</h1>



    </div>
}