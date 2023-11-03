
export function FormLogo() {
  return(
     <div data-testid="form-logo" className='flex flex-col items-center gap-2'>
      <img className="w-30 h-11" src="https://mfe-stg.mziq.com/mf-auth/41e96c18efab8ce5182c4980db5d1261.png" alt="MZIQ Logo" /> 
      <div> 
        <span className='text-cyan-300'>Empowering </span>
        <span>Investor Relations </span>
      </div>
    </div>
  )
}
