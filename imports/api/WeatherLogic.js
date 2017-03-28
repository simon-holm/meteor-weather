


export default buildReportDaysList = (data) => {
		let reportDays = [];
		data.map((report) => {
			if (reportDays.indexOf(report.dt_txt.split(" ")[0]) === -1) {
				reportDays.push(report.dt_txt.split(" ")[0]);
			};
		});
		return reportDays
}