import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';
import Colors from '../../constants/Colors';

export const CommentsLoader = () => {
	return (
		<ScrollView>
			<View style={styles.loader}>
				<ContentLoader
					active={true}
					title={false}
					loading={true}
					primaryColor="#343434"
					secondaryColor="#404040"
					pRows={1}
					reverse={true}
					pHeight={[65]}
					pWidth={['100%']}
				/>
				<View style={styles.childLoader}>
					<ContentLoader
						active={true}
						title={false}
						loading={true}
						primaryColor="#343434"
						secondaryColor="#404040"
						pRows={1}
						reverse={true}
						pHeight={[65]}
						pWidth={['100%']}
					/>
				</View>
				<View style={styles.childLoader}>
					<ContentLoader
						active={true}
						title={false}
						loading={true}
						primaryColor="#343434"
						secondaryColor="#404040"
						pRows={1}
						reverse={true}
						pHeight={[65]}
						pWidth={['100%']}
					/>
				</View>
				<ContentLoader
					active={true}
					title={false}
					loading={true}
					primaryColor="#343434"
					secondaryColor="#404040"
					pRows={1}
					reverse={true}
					pHeight={[65]}
					pWidth={['100%']}
				/>
				<ContentLoader
					active={true}
					title={false}
					loading={true}
					primaryColor="#343434"
					secondaryColor="#404040"
					pRows={1}
					reverse={true}
					pHeight={[65]}
					pWidth={['100%']}
				/>
				<ContentLoader
					active={true}
					title={false}
					loading={true}
					primaryColor="#343434"
					secondaryColor="#404040"
					pRows={1}
					reverse={true}
					pHeight={[65]}
					pWidth={['100%']}
				/>
				<View style={styles.childLoader}>
					<ContentLoader
						active={true}
						title={false}
						loading={true}
						primaryColor="#343434"
						secondaryColor="#404040"
						pRows={1}
						reverse={true}
						pHeight={[65]}
						pWidth={['100%']}
					/>
				</View>
				<ContentLoader
					active={true}
					title={false}
					loading={true}
					primaryColor="#343434"
					secondaryColor="#404040"
					pRows={1}
					reverse={true}
					pHeight={[65]}
					pWidth={['100%']}
				/>
				<ContentLoader
					active={true}
					title={false}
					loading={true}
					primaryColor="#343434"
					secondaryColor="#404040"
					pRows={1}
					reverse={true}
					pHeight={[65]}
					pWidth={['100%']}
				/>
				<ContentLoader
					active={true}
					title={false}
					loading={true}
					primaryColor="#343434"
					secondaryColor="#404040"
					pRows={1}
					reverse={true}
					pHeight={[65]}
					pWidth={['100%']}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	childLoader: {
		width: '80%',
	},
	loader: {
		backgroundColor: Colors.background,
		flex: 1,
		paddingHorizontal: 8,
		alignItems: 'flex-end',
	},
});
