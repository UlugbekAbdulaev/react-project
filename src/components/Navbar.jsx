
function navbar(){
    return (
    <nav className='container'>
        <div className='nav_nall'>

          <div className='one '>
            <div className='news'>News portal </div>
          </div>

          <div className='two'>
            <span>News</span>
            <span>blog</span>
            <img src="https://s3-alpha-sig.figma.com/img/745e/2460/d1fd53e06e1adc468223f1340173d84b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dqmf-cSBbeRvKHM8nibvNXSydfH4vii8FugJQ0dyzCeoYi9OyhJnu9FZP9Mz2sM9oXyQJwAVT1WPQ0I~qWXb6uSIng0Tq4tCYy~mYAD-U16rCRfO2OQIi7VE5H1UoFVqQA6gogRNwwLk08~0fcLPPZnHSWQZhGTVCjlny0zgl6BkdFyUpJ67Z0i2ETdTQeQnXCemHAkTIcqgvZmWFUiPKpavJ64VK1wjMmfdvAwzfd3FXecireGDtl7x4DzURoDkX~gtrrA0lt5WocyYtZ-8X5d87~Z2K~fItH0vee3swN3q9jOFuhsa38XVlgFj-BA5LM8F6i8Pr5cYZKroLTkpsg__" alt="face photo" />
          </div>

        </div>


        <hr />
        <div className='hover'>
          <ul >
            <li>Home</li>
            <li>Breaking news</li>
            <li>Regular news</li>
            <li>International news</li>
            <li>Sports</li>
            <li>Entertainment</li>
            <li>Culture</li>
            <li>Arts</li>
            <li>All news</li>
          </ul>
        </div>

        <div className='item'>
          <p>4 items found for category Entertainment</p>
        </div>
        <br />

        <div className='sort'>
          <div >
            <label>Sort By View:</label>
            <input type="text" placeholder='Default' />
          </div>
          <div className='buttons'>
            <button className='button1'>Today’s Pick</button>
            <button className='button2'>Trending</button>
          </div>
        </div>
      </nav>
    )
}

export default navbar;