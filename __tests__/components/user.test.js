import renderer from "react-test-renderer";
import User from "../../components/user";
import userListData from "../../__mocks__/user-list.mock";

it("<User /> should render userList mock datas' index 0", () => {
	const tree = renderer.create(<User data={userListData()[0]} />).toJSON();
	expect(tree).toMatchSnapshot();
});
