class FileHelper {

	static getFileRoute(filename) {
		const string = filename.split('.')[ 0 ].split('Route')[ 0 ].toLowerCase();
		return string;
	}

}

export default FileHelper;
