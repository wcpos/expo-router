import { Text, View } from 'react-native';

import { Link } from 'expo-router';

import { useSession } from '../../../../ctx';

export default function Index() {
	const { signOut } = useSession();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home Screen</Text>
			<Link href="/modal">Present modal</Link>

			<Text
				onPress={() => {
					// The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
					signOut();
				}}
			>
				Sign Out
			</Text>
		</View>
	);
}
