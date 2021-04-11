import React from 'react'
import { Link } from 'react-router-dom';

function SecondPage() {
    return (
        <div>
            <h1>SecondPage</h1>
            <Link to="/">ホームへ移動</Link>
        </div>
    )
}

export default SecondPage

// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const ComponentC = () => {
//     const history = useHistory()
//     const backPage = () => {
//         history.push("/componentb")
//     }
//     return (
//         <>
//             <div>ComponentB</div>
//             <button onClick={backPage}>componentBへ戻る</button>
//             <div>ComponentA</div>
//             <Link to="/">ホームへ移動</Link>
//         </>
//     )
// }

// export default ComponentC