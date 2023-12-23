

export default function Space({width = window.innerWidth, height = "50px"}) {

    const customStyles = {
        width: "100%",
        height: height,
    }

    return(
        <div style={{...customStyles}}/>
    )
}