import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore  from 'redux-mock-store';
import DetailsScreen from '../Screens/details';

const createMockStore = configureMockStore();
const store = createMockStore({});

const createTestProps = () => {
	navigation: {
		navigator: jest.fn()
	}
}

describe('Details Screen', () => {
	describe('rendering', () => {
	
		const props = createTestProps();
		const wrapper = shallow(

			<Provider store={store}>
				<DetailsScreen {...props}/>
			</Provider>
		)
				it('should render the view', () => {
					expect(wrapper.find('.details-wrapper')).toHaveLength(0)
				})
	})	
})

