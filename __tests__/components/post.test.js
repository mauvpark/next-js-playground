import renderer from "react-test-renderer";
import Post from "../../components/post";
import postsData from "../../__mocks__/posts.mock";

it("<Post /> should render posts mock datas' index 0", () => {
	const tree = renderer.create(<Post post={postsData()[0]} />).toJSON();
	expect(tree).toMatchSnapshot();
});
