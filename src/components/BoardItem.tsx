import React from 'react';

import { Card } from 'antd';
import styles from './BoardItem.module.css';

type Props = {};

const BoardItem: React.FC = (props: Props) => {
	return (
		<Card
			title='Card title'
			bordered={true}
			className={styles.card}
			headStyle={{ backgroundColor: '#c1c1c3' }}
		>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	);
};

export default BoardItem;
