import React from 'react';
import {Text, View, StyleSheet, Pressable, Image, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as commentActions from '../../logic/actions/comments';
import {useDispatch} from 'react-redux';
import {ICommentItem} from '../../models/Components/CommentItem';

export const CommentItem = (props: ICommentItem) => {
	const dispatch = useDispatch();

	const stageComment = async (id: string) => {
		try {
			props.comment.active = !props.comment.active;
			let action = commentActions.updateComment(id, props.comment.active);
			await dispatch(action);
		} catch (e: any) {
			Alert.alert(e.title, e.message, [{text: 'Okay'}]);
		}
	};

	const stageChildComment = async (id: string) => {
		try {
			props.comment.active = !props.comment.active;
			let action = commentActions.updateChildComment(
				id,
				props.index,
				props.parentComment,
			);
			await dispatch(action);
		} catch (e: any) {
			Alert.alert(e.title, e.message, [{text: 'Okay'}]);
		}
	};

	let profileImage;
	if (props.comment.submitter.profileImage) {
		profileImage = (
			<Image
				style={styles.profileImg}
				source={{
					uri: props.comment.submitter.profileImage,
				}}
			/>
		);
	} else {
		profileImage = (
			<Image
				style={styles.profileImg}
				source={require('../../../assets/profile-pic.png')}
			/>
		);
	}

	return (
		<View>
			<Pressable
				style={[
					styles.cartItem,
					!props.comment.active || !props.parentComment.active
						? styles.inactiveCartItem
						: styles.activeCartItem,
					props.isChild ? styles.childCartItem : null,
				]}
				onPress={() => {
					if (props.isChild) {
						stageChildComment(props.commentId);
					} else {
						stageComment(props.commentId);
					}
				}}>
				{profileImage}
				<View style={styles.textContainer}>
					<Text style={styles.comment}>{props.text}</Text>
					<Text style={styles.submitterName}>
						{props.comment.submitter.firstName}{' '}
						{props.comment.submitter.lastName} -{' '}
						{props.comment.formattedDate}
					</Text>
				</View>
				<View style={styles.checkboxContainer}>
					<CheckBox
						value={!!props.comment.active}
						tintColors={{true: '#FFFFFF', false: '#000000'}}
						onValueChange={newValue => {
							if (props.isChild) {
								stageChildComment(props.commentId);
							} else {
								stageComment(props.commentId);
							}
						}}
					/>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	submitterName: {
		fontSize: 10,
		color: '#CACACA',
	},
	profileImg: {
		width: 30,
		height: 30,
		marginRight: 10,
		borderRadius: 100,
	},
	checkboxContainer: {
		width: 20,
		marginHorizontal: 10,
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
	},
	cartItem: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
		color: 'white',
		fontSize: 14,
		backgroundColor: '#343434',
		borderRadius: 4,
		marginTop: 10,
		minHeight: 50,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	activeCartItem: {},
	inactiveCartItem: {
		opacity: 0.2,
	},
	childCartItem: {
		marginLeft: 50,
	},
	textContainer: {
		flex: 1,
	},
	comment: {
		fontSize: 16,
		textAlign: 'left',
		fontWeight: '400',
		letterSpacing: 0.25,
		color: 'white',
	},
});
