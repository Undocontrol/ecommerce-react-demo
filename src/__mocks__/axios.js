export default (url) => {
    if (url.includes('/product/')) {
        return Promise.resolve({
            data: {
                Name: 'Bar',
                Description: "Lorem Lipsum",
                ThumbnailUrl: 'http://test.com/image.png',
                Size: {
                    Currency: '£',
                    Price: 2.99
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
                        Title: 'Greeting Card',
                        ProductImage: {
                            Link: {
                                Href: 'http://test.com/image.png'
                            }
                        },
                        ProductID: '1234'
                    },
                    {
                        Name: 'Bar',
                        Title: 'Happy Birthday',
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
