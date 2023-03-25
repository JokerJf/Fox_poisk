


let doc = document




let arr = [
    {
        name: 'Забор (ПЭ-9003-0.45)',
        material: 'Полиэстер',
        view: 'мровля',
        Guarantee: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ofXK06dCV2YIvkZKua4AUBUkJ7tZo088L4X-idgBOA&s',
        color: [
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            },
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            },
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            }
        ]
    },
    {
        name: 'ласось (ПЭ-9003-0.45)',
        material: 'лось',
        view: 'рага',
        Guarantee: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ofXK06dCV2YIvkZKua4AUBUkJ7tZo088L4X-idgBOA&s',
        color: [
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            },
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            },
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            }
        ]
    }, {
        name: 'ломби (ПЭ-9003-0.45)',
        material: 'мровь',
        view: 'аозги',
        Guarantee: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ofXK06dCV2YIvkZKua4AUBUkJ7tZo088L4X-idgBOA&s',
        color: [
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            },
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            },
            {
                name: 'Красный',
                color: 'red',
                src: './img/img22.jpg'
            }
        ]
    }

]
// отрисовка 
let poisK_html = doc.querySelector('.poisk')
function poisk(Fox, nam, mat, vie, img) {

    let block_po = doc.createElement('div')
    block_po.classList.add('block')
    let img_po = doc.createElement('img')
    img_po.src = img
    let span_po_1 = doc.createElement('span')
    span_po_1.innerHTML = nam
    let span_po_2 = doc.createElement('span')
    span_po_2.innerHTML = mat
    let span_po_3 = doc.createElement('span')
    span_po_3.innerHTML = vie

    block_po.append(img_po, span_po_1, span_po_2, span_po_3)
    Fox.append(block_po)

}

// фильтрация поиска
let inp = doc.querySelector('.pos')
inp.oninput = function oni() {
    poisK_html.innerHTML = ''
    for (let item of fill) {
        let vel = doc.querySelector('.pos')
        let n = item.name
        let n2 = item.material
        let n3 = item.view
        // console.log(item.name);
        let nn = vel.value.length
        // console.log(n.slice(0,nn));
        // console.log(vel.value);
        // if (n.slice(0,nn) == vel.value && vel.value != '') {
        //     return poisk(poisK_html,item.name,item.material,item.view,item.img)
        // }
        if (n.slice(0, nn) == vel.value && vel.value != '') {
            console.log('gg1');
            poisk(poisK_html, item.name, item.material, item.view, item.img)
        } else if (n2.slice(0, nn) == vel.value && vel.value != '') {
            console.log('gg2');
            poisk(poisK_html, item.name, item.material, item.view, item.img)
        } else if (n3.slice(0, nn) == vel.value && vel.value != '') {
            console.log('gg3');
            poisk(poisK_html, item.name, item.material, item.view, item.img)
        } else if (vel.value == '') {
            poisk(poisK_html, item.name, item.material, item.view, item.img)
        }

    }
}

let btn = doc.querySelector('.btn')
btn.addEventListener('click', () => {

})

let fill
function res() {
    fetch('http://localhost:3002/kar-kar')
        .then(res => res.json())
        .then(res => {
            fill = res
            inp.oninput()
        });

}
res()



let delta = []
let mine_form = doc.querySelector('.mine_form')
let btn_dop_img = doc.querySelector('.mine_form .dop_img')


// отрисовка фото в код
let nn
let fz = mine_form.form_img
fz.addEventListener('change', () => {

    let render = new FileReader()
    render.onload = function (e) {
        nn = e.target.result
    }
    render.readAsDataURL(fz.files[0])
})

let nn2
let fz2 = mine_form.dop_img
fz2.addEventListener('change', () => {

    let render = new FileReader()
    render.onload = function (e) {
        nn2 = e.target.result
    }
    render.readAsDataURL(fz2.files[0])
})



let btn_down = doc.querySelector('.mine_form .down')
btn_down.addEventListener('click', (ev) => {
    ev.preventDefault()
    // for (let item of mine_form) {
    //     if (item[type = 'name']) {
    //         console.log(`${item[type = 'name']} - ${item[type = 'value']} - ${item.classList}`);

    //     }

    // }
    delta = ( // главный масив
        {
            id:"",
            name: mine_form.name.value,
            material: mine_form.material.value,
            view: mine_form.view.value,
            Guarantee: mine_form.Guarantee.value,
            img: nn,
            color: [
                {
                    name: mine_form.dop_name.value,
                    color: mine_form.dop_color.value,
                    src: nn2
                }
            ]
        }
    )

    console.log(delta);
})
btn_dop_img.addEventListener('click', (ev2) => {
    ev2.preventDefault()
    delta.color.push(
        {
            name: mine_form.dop_name.value,
            color: mine_form.dop_color.value,
            src: nn2
        }
    )
    mine_form.dop_name.value = ''
    mine_form.dop_color.value = ''
    mine_form.dop_img.value = ''
    console.log(delta);
})




let perehod = doc.querySelector('.perehod')
let m_box = doc.querySelector('.box')
let m_form = doc.querySelector('.modal_form')

perehod.addEventListener('click', () => {
    m_form.classList.toggle('bod_off')
    m_box.classList.toggle('bod_off')
})


let up = doc.querySelector(' .up')
up.addEventListener('click',(ev3)=>{
    ev3.preventDefault()
    console.log(delta);
    fetch('http://localhost:3002/kar-kar', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(delta)
        
    })
    res()
})










