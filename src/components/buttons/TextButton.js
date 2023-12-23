

export default function TextButton({text = "TextButton", width = 100, height = 100, onClick = () => {}}, className = "textButton") {

    return(
        <button className={className} onClick={onClick}>
            text
        </button>
    )
}