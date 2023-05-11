export default function ChatBackButton(props: {setIsFolderSelected: Function}) {
    return (
        <button onClick={() => props.setIsFolderSelected({ isSelected: false, type: "folder" })}>
            Back to folders
        </button>
    )
}