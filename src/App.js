import { useState, useEffect } from 'react'
import ProductView from './ProductsView'
import LoadMoreController from './LoadMoreController'
import CategoryHandler from './CategoriesHandler'
import './global.css'
const perLoad = 8
function App() {
  let [products, setProducts] = useState([])
  let [category, setCategory] = useState('select all')
  let [loadCount, setLoadCount] = useState(1)

  let getAllCategories = () => {
    return [...new Set(products.map(x => x.category))]
  }
  // useEffect(() => {
  //   window.addEventListener('resize', (event) => {
  //     let newWidth = window.innerWidth;
  //     if (newWidth > 576 && newWidth < 768) {
  //       setPerLoad(9)
  //     } else {
  //       setPerLoad(8)
  //     }
  //   });
  // })
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        let data = [...Array(5).fill(json).flat(Infinity)]
        setProducts(data)

      })
  }, [])

  let categoryHandler = (e) => {
    setCategory(e.target.value)
    setLoadCount(p => 1)
  }
  let isLoadCompleted = (datas) => {
    if (loadCount == Math.ceil(datas.length / perLoad)) {
      return true
    }
    return false
  }

  let loadHandler = () => {
    setLoadCount(p => p + 1)
  }
  let filterDataByCategory = (data) => {
    if (category == 'select all') {
      return data
    }
    return data.filter(x => x.category == category)
  }
  let showData = () => {
    let getData = filterDataByCategory(products.slice())
    let loadComplete = isLoadCompleted(getData)
    let totalData = getData.length
    let datas = getData.slice(0, perLoad * loadCount)
    let totalResult = datas.filter(x => x).length
    return <div>
      <ProductView products={datas} />
      <LoadMoreController loadComplete={loadComplete} totalResult={totalResult} loadHandler={loadHandler} totalData={totalData} />
    </div>
  }
  return <div className='container my-5'>
    {!products.length ? <div className='row'>
      <div className='col-md-12 text-center'>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div> : <div>
      <CategoryHandler categoris={getAllCategories()} getCategory={category} categoryHandler={categoryHandler} />
      {showData()}
    </div>}


  </div>

}

export default App;
