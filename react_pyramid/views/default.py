import numpy as np
from pyramid.view import view_config

from react_pyramid.lib.lem2_classifier import LEM2Classifier
from react_pyramid.models import NeuralNetwork


@view_config(route_name='home', renderer='react_pyramid:templates/index.html')
def my_view(request):
    return dict()


@view_config(route_name='preform', renderer='json')
def some(request):
    DBSession = request.dbsession
    answers = request.json['answers']

    a = []
    b = []

    query = DBSession.query(NeuralNetwork)

    for i in query:
        a.append([i.question0.encode('ascii', 'ignore'), i.question1.encode('ascii', 'ignore'),
                  i.question2.encode('ascii', 'ignore'), i.question3.encode('ascii', 'ignore'),
                  i.question4.encode('ascii', 'ignore'), i.question5.encode('ascii', 'ignore'),
                  i.question6.encode('ascii', 'ignore')])

        b.append(str(i.result))

    ndx = np.array(a)
    ndy = np.array(b)

    lem2 = LEM2Classifier()
    lem2.fit(ndx, ndy)

    predict_data = [answers[0].encode('ascii', 'ignore'), answers[1].encode('ascii', 'ignore'),
                    answers[2].encode('ascii', 'ignore'), answers[3].encode('ascii', 'ignore'),
                    answers[4].encode('ascii', 'ignore'), answers[5].encode('ascii', 'ignore'),
                    answers[6].encode('ascii', 'ignore')]

    predict = lem2.predict(predict_data)

    return predict
