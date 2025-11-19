export interface FormWrapperProps {
  children: React.ReactNode
}

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-y-8 gap-x-[30px]">
      {children}
    </div>
  )
}
