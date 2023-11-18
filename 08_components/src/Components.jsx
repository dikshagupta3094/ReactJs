import Image from "./Image"

function Components(props){
   let title = "this is components"
    return(
        <>
          <h1>{props.name}</h1>
          <Image src = {props.image} />
          <h2 style={{fontSize: "50px", color : "red"}}>{title}</h2>
        </>
    )
}

export default Components