from pyramid.view import view_config

from react_pyramid.models import NeuralNetwork


@view_config(route_name='home', renderer='react_pyramid:templates/index.html')
def my_view(request):
    return dict()


@view_config(route_name='preform', renderer='json')
def some(request):
    DBSession = request.dbsession
    answers = request.json['answers']

    return True
