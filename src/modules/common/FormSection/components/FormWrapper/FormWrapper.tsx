export interface FormWrapperProps {
  children: React.ReactNode
}

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-y-8 gap-x-[30px]">
      {children}
    </div>
  )
}
