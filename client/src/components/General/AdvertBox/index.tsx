import classNames from 'classnames'

interface AdvertBoxProps {
  content?: string
  btnContent?: string
  backgroundColor?: string
  buttonColor?: string
}

function AdvertBox(props: AdvertBoxProps) {
  return (
    <div className={`my-4 px-2 py-4 text-center rounded-lg mx-auto ${props.backgroundColor}`}>
      <p className="text-xs text-theme-primary font-semibold mb-[10px]">{props.content}</p>
      <button
        className={`text-xs font-semibold border px-9 py-[6px] rounded-full hover:brightness-90 ${props.buttonColor}`}
      >
        {props.btnContent}
      </button>
    </div>
  )
}

export default AdvertBox
