live('.mobile-menu-icon', 'click', function() {
	document.querySelector('.main-actions-mobile').classList.toggle('hidden');
});

live('.event .event-image', 'click', function(e) {
	const el = e.target;
	const eventId = el.getAttribute('data-event-id');
	if (eventId) window.location.href = '/event/' + eventId;
});

// Most functions adapted from https://plainjs.com
function getAjax(url, success, error) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
		else { if (error) error(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

function putAjax(url, data, success, error) {
	var params = typeof data == 'string' ? data : Object.keys(data).map(
		function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
	).join('&');

	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open('PUT', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState>3 && (xhr.status==200 || xhr.status==201)) { success(xhr.responseText); }
		else { if (error) error(xhr.responseText); }
	};
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(params);
	return xhr;
}

function postAjax(url, data, success, error) {
	var params = typeof data == 'string' ? data : Object.keys(data).map(
		function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
	).join('&');

	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open('POST', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState>3 && (xhr.status==200 || xhr.status==201)) { success(xhr.responseText); }
		else { if (error) error(xhr.responseText); }
	};
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(params);
	return xhr;
}

// helper for enabling IE 8 event bindings
function addEvent(el, type, handler) {
	if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}

// matches polyfill
this.Element && function(ElementPrototype) {
	ElementPrototype.matches = ElementPrototype.matches ||
		ElementPrototype.matchesSelector ||
		ElementPrototype.webkitMatchesSelector ||
		ElementPrototype.msMatchesSelector ||
		function(selector) {
		var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
		while (nodes[++i] && nodes[i] != node);
		return !!nodes[i];
	}
}(Element.prototype);

// live binding helper using matchesSelector
function live(selector, event, callback, context) {
	addEvent(context || document, event, function(e) {
		var found, el = e.target || e.srcElement;
		while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
		if (found) callback.call(el, e);
	});
}

// Polyfill for String.startsWith
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
