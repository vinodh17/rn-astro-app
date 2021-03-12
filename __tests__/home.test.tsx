import { shallow } from "enzyme";
import { Provider } from "react-redux";
import  configureMockStore  from "redux-mock-store";
import { Home} from '../Screens/home';

const createMockStore = configureMockStore();
const store = createMockStore({});

const createTestProps = () => {
	navigation: {
		navigate: jest.fn()
	}
}


describe('', () => {
	describe('', () => {
		const props = createTestProps();
		const wrapper = shallow(
			<Provider store={store}>
				<Home {...props}/>
			</Provider>
		)

		it('', () => {
			expect(wrapper.find('.home-wrapper')).toHaveLength(0);
		})
	})
})
