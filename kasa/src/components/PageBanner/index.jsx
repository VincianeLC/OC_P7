import '../../utils/style/PageBanner.css'




function PageBanner({children}) {
  
    return (
        <div className='PageBanner'>
            
<h2>{children}</h2>

</div>

)
}

export default PageBanner