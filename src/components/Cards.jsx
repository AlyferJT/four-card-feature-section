import { styled } from "styled-components";

import CardInfo from "./CardInfo";

import supervisorLogo from "../assets/images/icon-supervisor.svg";
import teamBuilderLogo from "../assets/images/icon-team-builder.svg";
import karmaLogo from "../assets/images/icon-karma.svg";
import calculatorLogo from "../assets/images/icon-calculator.svg";

export default function Cards() {
	return (
		<StyledMain>
			<CardInfo
				title='Supervisor'
				description='Monitors activity to identify project roadblocks'
				logo={supervisorLogo}
				borderColor='hsl(180, 62%, 55%)'
			/>
			<div className='middle-cards'>
				<CardInfo
					title='Team Builder'
					description='Scans our talent network to create the optimal team for your project'
					logo={teamBuilderLogo}
					borderColor='hsl(0, 78%, 62%)'
				/>
				<CardInfo
					title='Karma'
					description='Regularly evaluates our talent to ensure quality'
					logo={karmaLogo}
					borderColor='hsl(34, 97%, 64%)'
				/>
			</div>
			<CardInfo
				title='Calculator'
				description='Uses data from past projects to provide better delivery estimates'
				logo={calculatorLogo}
				borderColor='hsl(212, 86%, 64%)'
			/>
		</StyledMain>
	);
}

const StyledMain = styled.main`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5rem;

	gap: 3rem;

	& .middle-cards {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	@media (max-width: 1100px) {
		flex-direction: column;
		margin-bottom: 5rem;
	}
`;
