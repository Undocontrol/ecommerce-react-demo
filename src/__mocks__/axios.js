
export default {
    get: jest.fn((url)=> {

        if(url.includes('/product/')) {
            Promise.resolve({ Products: [
                {
                    Name: 'Foo',
                    ImageUrls: {
                        ImageNo: 1,
                        ImageUrl: 'http://test.com/image.png',
                        Description: 'Lorem Lipsum'
                    },
                    ProductID: '1234'
                },
                {
                    Name: 'Bar',
                    ImageUrls: {
                        ImageNo: 1,
                        ImageUrl: 'http://test.com/image2.png',
                        Description: 'Lorem Lipsum 2'
                    }
                }
            ] })
        } else if(url.includes('products')) {
            Promise.resolve({
                Name: 'Foo',
                ImageUrls: {
                    ImageNo: 1,
                    ImageUrl: 'http://test.com/image.png',
                    Description: 'Lorem Lipsum'
                }
            })
        }

    })
};
