
export function Logo() {
  return(
     <a className='flex flex-row items-center gap-4 cursor-pointer' href="https://mzgroup.com">
      <img className="w-24 h-8" src="https://mfe-stg.mziq.com/mf-auth/41e96c18efab8ce5182c4980db5d1261.png" alt="MZIQ Logo" /> 
      <div className='flex flex-col'> 
        <span className='text-cyan-300'>Empowering </span>
        <span>Investor Relations </span>
      </div>
    </a>
  )
}
