import React from 'react';

function Work() {

    var images = [
        {url: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2FsJTIwaW1hZ2VzfGVufDB8fDB8fHww", top: "50%", left: "50%", isActive: true},
        {url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsfGVufDB8fDB8fHww", top: "53%", left: "48%", isActive: false},
        {url: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2huaWNhbHxlbnwwfHwwfHx8MA%3D%3D", top: "49%", left: "51%", isActive: false},
        {url: "https://plus.unsplash.com/premium_photo-1682145181120-73cfdfc8a36d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5pY2FsfGVufDB8fDB8fHww", top: "51%", left: "49%", isActive: false}
    ]

    return (
        <div className='w-full mt-10'>
            <div className='max-w-screen-xl mx-auto text-center'>
                <h1 className='text-[30vw] leading-none font-medium select-none tracking-tight'>work</h1>
            </div>
            <div className='absolute top-0 w-full h-full '>
                {images.map((elem, index)=>(elem.isActive && (<img className='absolute w-52 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top, left: elem.left}} alt="" />)))}
            </div>
        </div>
    )
}

export default Work;