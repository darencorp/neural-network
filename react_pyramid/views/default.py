import numpy as np
from pyramid.view import view_config

from react_pyramid.lib.lem2_classifier import LEM2Classifier
from react_pyramid.models import NeuralNetwork
from react_pyramid.models.test_set import TestSet


@view_config(route_name='home', renderer='react_pyramid:templates/index.html')
def my_view(request):
    return dict()


@view_config(route_name='preform', renderer='json')
def preform(request):
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

    lem2.print_rules()

    predict_data = [answers[0].encode('ascii', 'ignore'), answers[1].encode('ascii', 'ignore'),
                    answers[2].encode('ascii', 'ignore'), answers[3].encode('ascii', 'ignore'),
                    answers[4].encode('ascii', 'ignore'), answers[5].encode('ascii', 'ignore'),
                    answers[6].encode('ascii', 'ignore')]

    predict = lem2.predict(predict_data, 'first_fit')

    return predict


@view_config(route_name='test', renderer='json')
def test(request):

    def str_to_bool(s):
        return s == "True"

    DBSession = request.dbsession

    # teach AI
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

    rules = lem2.print_rules()

    # get test set
    tests_query = DBSession.query(TestSet)

    tests = [
        {
            'answers': [i.question0.encode('ascii', 'ignore'), i.question1.encode('ascii', 'ignore'),
                        i.question2.encode('ascii', 'ignore'), i.question3.encode('ascii', 'ignore'),
                        i.question4.encode('ascii', 'ignore'), i.question5.encode('ascii', 'ignore'),
                        i.question6.encode('ascii', 'ignore')],
            'result': str(i.result)
        } for i in tests_query
    ]

    # test AI
    positive = 0
    negative = 0

    for test in tests:
        predict_data = [test['answers'][0].encode('ascii', 'ignore'), test['answers'][1].encode('ascii', 'ignore'),
                        test['answers'][2].encode('ascii', 'ignore'), test['answers'][3].encode('ascii', 'ignore'),
                        test['answers'][4].encode('ascii', 'ignore'), test['answers'][5].encode('ascii', 'ignore'),
                        test['answers'][6].encode('ascii', 'ignore')]

        expect_result = test['result']
        result = lem2.predict(predict_data, 'lers')

        if expect_result == result:
            positive += 1
        else:
            negative += 1

    return dict(rules=rules, positive=positive, negative=negative)


@view_config(route_name='get_test_set', renderer='json')
def get_test_set(request):
    DBSession = request.dbsession

    query = DBSession.query(TestSet)

    tests = [{
        'id': i.id,
        'question0': i.question0.encode('ascii', 'ignore'),
        'question1': i.question1.encode('ascii', 'ignore'),
        'question2': i.question2.encode('ascii', 'ignore'),
        'question3': i.question3.encode('ascii', 'ignore'),
        'question4': i.question4.encode('ascii', 'ignore'),
        'question5': i.question5.encode('ascii', 'ignore'),
        'question6': i.question6.encode('ascii', 'ignore'),
        'result': i.result,
    } for i in query]

    return tests
