export default (url) => {
    if (url.includes('/product/')) {
        return Promise.resolve({
            data: {
                Name: 'Bar',
                ProductImage: {
                    Link: {
                        Href: 'http://test.com/image.png'
                    }
                },
                ProductID: '4321'
            }
        })
    } else if (url.includes('products')) {
        return Promise.resolve({
            data: {
                Products: [
                    {
                        Name: 'Foo',
                        ProductImage: {
                            Link: {
                                Href: 'http://test.com/image.png'
                            }
                        },
                        ProductID: '1234'
                    },
                    {
                        Name: 'Bar',
                        ProductImage: {
                            Link: {
                                Href: 'http://test.com/image.png'
                            }
                        },
                    }
                ]
            }
        })
    }
}
