import CopyIcon from "@/components/icons/CopyIcon";


interface CopyButtonProps{
    textToCopy: string
}

export default function CopyButton({textToCopy}: CopyButtonProps){
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
    }
    return (
        <button type='button' onClick={handleCopy} className="inline-flex justify-center items-center">
            <CopyIcon title="Clique aqui para copiar" className="fill-black" />
        </button>
    )
}