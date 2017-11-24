from sqlalchemy import (
    Column,
    Integer,
    Text,
    Boolean
)

from .meta import Base


class NeuralNetwork(Base):
    __tablename__ = 'neural_network'
    id = Column(Integer, primary_key=True, autoincrement=True)
    question0 = Column(Text)
    question1 = Column(Text)
    question2 = Column(Text)
    question3 = Column(Text)
    question4 = Column(Text)
    question5 = Column(Text)
    question6 = Column(Text)
    result = Column(Boolean)

    def __init__(self, question0, question1, question2, question3, question4, question5, question6):
        self.question0 = question0
        self.question1 = question1
        self.question2 = question2
        self.question3 = question3
        self.question4 = question4
        self.question5 = question5
        self.question6 = question6
