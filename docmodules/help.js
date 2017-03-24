/**
 * Created by jcayouette on 3/16/17.
 */

// Help
casper.thenOpen(url + '/rhn/help/index.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/help/help_index.png',
        '#spacewalk-content')
});

// Admin > Task Schedules > Tomcat Logs
casper.thenOpen(url + '/rhn/help/Search.do', function() {
    this.echo(this.getTitle(), 'INFO: ');
    this.captureSelector('images/help/help_search.png',
        '#spacewalk-content')
});