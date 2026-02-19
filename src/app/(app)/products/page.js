import Card from "@/common/card/card"

const ProductsPage = () => {
  return (
  <div>
    <div className="max-w-[85%] bg-gray-800 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 mx-25 gap-4 justify-items-center">  
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={199}
        description="Random description of shoes "
      />
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={299}
        description="Random description of shoes "
      />
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={299}
        description="Random description of shoes "
      />
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={299}
        description="Random description of shoes "
      />
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={299}
        description="Random description of shoes "
      />
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={299}
        description="Random description of shoes "
      />
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={399}
        description="Random description of shoes "
      />
      <Card
        image="/products/shoes.jpg"
        title="Shoes"
        price={499}
        description="Random description of shoes "
      />
    </div>  

  </div>
  )
}

export default ProductsPage