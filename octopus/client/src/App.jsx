import React from 'react';
import { useQuery } from 'react-apollo';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GET_PRODUCT } from './queries';
import AddToCart from "./components/AddToCart";

const App = () => {
  const { data } = useQuery(GET_PRODUCT, { variables: { id: 1 } });

  // TODO: Add error handling
  // if (error) throw new Error(error);

  return (
    <div className="container">
      <Header />
      <main>
        <section className="product-info">
          <div className="product-info-left">
            <div className="product-image-wrapper">
              <img src={data?.product?.imgUrl} alt={data?.product?.name || ""} />
            </div>
          </div>

          <div className="product-info-right">
            <div className="section-container blue-bg product-text">
              <h1 className="product-title">{data?.product?.name}</h1>
              <p className="product-subtitle">{data?.product?.power} // Packet of {data?.product?.quantity}</p>
            </div>

            <AddToCart product={data?.product} />

            <section className="section-container blue-bg description-container">
              <h3 className="section-title">Description</h3>
              <p className="section-text">{data?.product?.description}</p>
            </section>

            <section className="section-container description-container">
              <h3 className="section-title">Specifications</h3>

              <table className="specifications-table">
                <tbody>
                  <tr>
                    <td className="section-text">Brand</td>
                    <td className="section-text">{data?.product?.brand}</td>
                  </tr>
                  <tr>
                    <td className="section-text">Item weight</td>
                    <td className="section-text">{data?.product?.weight}</td>
                  </tr>
                  <tr>
                    <td className="section-text">Dimensions</td>
                    <td className="section-text">{data?.product?.height}x{data?.product?.width}x{data?.product?.length}</td>
                  </tr>
                  <tr>
                    <td className="section-text">Item model number</td>
                    <td className="section-text">{data?.product?.modelCode}</td>
                  </tr>
                  <tr>
                    <td className="section-text">Colour</td>
                    <td className="section-text">{data?.product?.colour}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
};

export default App;
