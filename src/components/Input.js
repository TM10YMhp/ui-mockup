import MenuIcon from '@/assets/MenuIcon.svg'

export default function Input({ children, ...props }) {
  return (
    <div className="relative text-placeholder px-1 m-2 sticky top-3 z-10">
      <input
        className="bg-input rounded-2xl w-full pl-10 h-8 pt-0.5"
        placeholder={'Search notes'}
      />
      <button
        className="absolute rounded-xl w-7 top-0.5 left-3"
        {...props}
      >
        <MenuIcon />
      </button>
    </div>
  )
}
