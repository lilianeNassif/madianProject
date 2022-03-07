const url = 'https://filltext.com/?rows=10&fnam={firstName}&lname={lastName}&category=["category1","category2","category3"]&pretty=true'

async function getData(){
    const response = await fetch(url)
    const data = await response.json();
    const { fnam, lname, category } = data

    const firstName = data.map(item => {
        return item.fnam
    });

    const lastName = data.map(item => {
        return item.lname
    });

    const cat = data.map(item => {
        return item.category
    });

    const uniqueCategories = cat.filter((element, index) => {
        return cat.indexOf(element) === index;
    });

    const listategories = document.querySelector('.list_categories')
    const userContainer = document.querySelector('.users-container')
    


    uniqueCategories.forEach(eachcat => {

        const upbtnCategory = document.createElement('button')
        upbtnCategory.classList.add('action-category')
        upbtnCategory.textContent = `${eachcat}`
        upbtnCategory.id = `${eachcat}`
        //upbtnCategory.onclick = showRelated(`${eachcat}`)
        listategories.appendChild(upbtnCategory)
        userContainer.append(listategories)

    });


    data.forEach(item => {
        
        const userblock = document.createElement('div')
        userblock.dataset.category = `${item.category}`
        userblock.classList.add('user_block')
        
        const div1 = document.createElement('div')
        const userIc = document.createElement('div')
        const userInfo = document.createElement('div')
        const btnCategory = document.createElement('button')
        
        
        userIc.textContent = `${item.fnam.charAt(0)}${item.lname.charAt(0)}`
        userIc.classList.add('user-icon')

        userInfo.textContent = `${item.fnam} ${item.lname}`
        userInfo.classList.add('userInfo')

        btnCategory.textContent = `${item.category}`
        btnCategory.classList.add('user-category')

        
        div1.append(userIc,userInfo,btnCategory)
        userblock.append(div1)

        userContainer.append(userblock)
    });
    
    document.querySelectorAll('.action-category').forEach(item => {
        item.addEventListener('click', e => {
            
            e.preventDefault();
            const catID = e.target.id ;

            const clickedCats = document.querySelectorAll(".user_block")
           
            clickedCats.forEach(function(ab){
                if(ab.dataset.category  === catID)
                {
                    ab.style.display = 'block'
                }else
                {
                    ab.style.display = 'none'
                }
                    
                
            })
    
        })
      })

    /*document.querySelector('.action-category').addEventListener('click',(e) =>{
        e.preventDefault();
        const catID = e.target.id ;
        alert(catID)
        const clickedCats = document.querySelectorAll(".user_block")
        const allcatBlock = document.querySelectorAll("[data-category]")
        console.log(allcatBlock)
        clickedCats.forEach(function(ab){
            if(ab.dataset.category  === catID)
            {
                ab.style.display = 'block'
            }else
                ab.style.display = 'none'
            
        })

    })*/

}




getData()
/*let dataRow = getData()
console.log(dataRow)
dataRow.forEach(item => {
    console.log(item)
});*/

