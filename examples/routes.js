
import SelectExample from './SelectExample';
import BorderLayoutExample1 from './BorderLayoutExample1/BorderLayoutExample1';
import BorderLayoutExample2 from './BorderLayoutExample2/BorderLayoutExample2';
import BorderLayoutExample3 from './BorderLayoutExample3/BorderLayoutExample3';
import BorderLayoutExample4 from './BorderLayoutExample4/BorderLayoutExample4';

export default {
	SelectExample: {
		getTitle: () => 'Examples',
		getSceneClass: () => SelectExample
	},
	BorderLayoutExample1: {
		getSceneClass: () => BorderLayoutExample1
	},
	BorderLayoutExample2: {
		getTitle: () => 'Example 2 123123',
		getSceneClass: () => BorderLayoutExample2
	},
	BorderLayoutExample3: {
		getTitle: () => 'Example 3',
		getSceneClass: () => BorderLayoutExample3
	},
	BorderLayoutExample4: {
		getTitle: () => 'Example 4',
		getSceneClass: () => BorderLayoutExample4
	}
}
