import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';

export const AccessoriesComponent = () => {
    return (

        <div className='container' style={{ marginBottom: '50px' }}>
            <TitleText title="fashion accessories" />
            <Breadcrumber title1='shop now' title2='fashion accessories'/>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Women's Tote Bags
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '200px' }}>
                        <div className="accordion-body">
                            {/* Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body. */}
                        </div>
                        <span style={{ display: 'block', marginTop: '30px' }}>

                            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 9,750.00"
                                    content="vintage women floral designed leather handbag "
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'

                                    title="LKR 6,500.00"
                                    content="SHEIN casual solid color crossbody bag"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1564139615082-01535600057f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xCWm9vd3pCOFI4MHx8ZW58MHx8fHx8'

                                    title="LKR 5,680.00"
                                    content="SHEIN Hand-held solid color leather bag "
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1585488433867-8eb24f59723c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8Qlpvb3d6QjhSODB8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 7,695.00"
                                    content="Casual leather two tone box crossbody bag"
                                />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Perfumes
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://plus.unsplash.com/premium_photo-1673823666050-bb56202cc9e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 4,550.00"
                                    content="Ceylon Rose Garden Island Rose Perfume - 100ml"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1561997835-49889d0e0355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
                                    title="LKR 10,500.00"
                                    content="Calvin Klein Be Unisex perfume - 100ml"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 95,800.00"
                                    content="CHANEL COCO MADEMOISELLE Wome's perfume - 100ml"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1610113233329-1c73b6f7fe98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
                                    title="LKR 84,900.00"
                                    content="N°5 CHANEL Paris Women's perfume - 1000ml"
                                />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Women's High Heels
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1579727027525-352607d8dc49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1578847857503-bed61186a57a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1552419272-b0d8e736ea2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1613987876445-fcb353cd8e27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>

                        </span>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Accessories
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1641814250010-9887d86eedfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1625792508272-bc6ad2788b14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://plus.unsplash.com/premium_photo-1674255466849-b23fc5f5d3eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>

                        </span>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Suncruchies
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1595686220657-ed59f0f14510?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1629019581609-a1626ecfcc19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1672699323645-75ace776093e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1630081757603-a46d414be089?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>

                        </span>

                    </div>


                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        Women's Watches
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px', marginBottom: '100px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1655693488763-bba42128fbc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkaWVzJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1653651461484-5c8ea009b1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1655693487677-683764e20c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1655693489381-a7ae63269c48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>

                        </span>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Hats
                        </button>
                    </h2>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1585799357162-5ef26c702aba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://plus.unsplash.com/premium_photo-1671149785230-bf9fc44e3829?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1583703779199-e6ed378df595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzN8NDUzMTY3OHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1601980265524-04468b355ac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>

                        </span>

                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                        Women's Sneakers, Boots
                        </button>
                    </h2>
                    <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>


                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1656164753657-8ff832063a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1591370409347-2fd43b7842de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxODA0MjI1Mnx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1656944227480-98180d2a5155?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>

                        </span>
                        <span style={{ display: 'block', marginTop: '300px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1602231379593-b85a472e3c99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1620138546344-7b2c38516edf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1610398752800-146f269dfcc8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1462117580841-44df9d9d23fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>

                        </span>

                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                            Scarfs
                        </button>
                    </h2>
                    <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '200px' }}>


                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1602095319680-edfc5b44cf5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="Nineth Product"
                                    content="Description of the second product."
                                />
                            </div>
                            
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}