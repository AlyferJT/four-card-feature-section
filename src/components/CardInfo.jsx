import { styled } from "styled-components";

export default function CardInfo({ title, description, logo, borderColor }) {
	return (
		<StyledDiv style={{ borderTop: `.4rem solid ${borderColor}` }}>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='card-img'>
				<img src={logo} alt='TITLE icon' />
			</div>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	width: 28rem;
	padding: 3rem;
	border-radius: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	& h3 {
		color: hsl(234, 12%, 34%);
		font-weight: 600;
		font-size: 2rem;
	}

	& p {
		font-size: 1.3rem;
		margin-top: 1.5rem;
		font-weight: 400;
		line-height: 2.5rem;
		color: hsl(229, 6%, 66%);
	}

	& .card-img {
		margin-top: 4rem;
		display: flex;
		justify-content: flex-end;
	}
`;
