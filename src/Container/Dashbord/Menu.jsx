import React from 'react'


function Menu({setShowMenu}) {

    const swicth_color = (e)=>{
        if(e.target.classList.contains('active')) return

        var mnu = document.getElementsByClassName('menu-mini')

        for (let i=0; i < mnu[0].children.length; i++) {
            mnu[0].children[i].classList.remove("active");
        }
        
        e.target.classList.add("active");
        console.log(e.target.value)
        setShowMenu(e.target.value)
    }

    return (
        <div className='menu-mini'>
            <button onClick={swicth_color} value='riz_brise' className='active'>Riz brisé 100%</button>
            <button onClick={swicth_color} value='cer_loc' >Céréales locales</button>
            <button onClick={swicth_color} value='prod_mar' >Produits maraîchers</button>
            <button onClick={swicth_color} value='prod_mar' >Produits maraîchers</button>
            <button onClick={swicth_color} value='conc_tom' >Concentré de tomate</button>
        </div>
    )
}

export default Menu