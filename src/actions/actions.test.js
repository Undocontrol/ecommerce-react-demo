import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name:  'Fetched #2'}],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('fetches data and displays images', (done) => {
  const wrapper = mount(
    <Root>
      <CardListings />
    </Root>
  )

  wrapper.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapper.update();

    expect(wrapper.find('li').length).toEqual(2);

    done();
    wrapper.unmount();
  });
});