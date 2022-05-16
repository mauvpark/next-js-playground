import renderer from "react-test-renderer";
import Footer from "../../components/footer";

it("<Footer /> should render only copyright text by Mauv", () => {
	const tree = renderer.create(<Footer />).toJSON();
	expect(tree).toMatchSnapshot();
});
