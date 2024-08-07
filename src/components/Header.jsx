import { styled } from "styled-components";

export default function Header() {
	return (
		<StyledHeader>
			<h1>Reliable, efficient delivery</h1>
			<h2>Powered by Technology</h2>
			<p>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</p>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	width: 100%;

	& h1,
	& h2 {
		font-size: 3.7rem;
		color: hsl(234, 12%, 34%);
	}

	& h1 {
		font-weight: 200;
	}

	& h2 {
		margin-top: 1.5rem;
		font-weight: 600;
	}

	& p {
		margin-top: 2.5rem;
		color: hsl(229, 6%, 66%);
		line-height: 2.2rem;
		width: 50rem;
	}
`;
